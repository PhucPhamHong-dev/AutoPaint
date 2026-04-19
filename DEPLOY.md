# Deploy AutoPaint lên server

App này là frontend Vite tĩnh. Cách deploy đơn giản và ổn định nhất là:

1. Build ra thư mục `dist/`
2. Copy `dist/` lên server
3. Dùng `nginx` phục vụ domain `ojt.phucpink.io.vn`
4. Cấp SSL bằng `certbot`

## 1. Kết nối SSH tới server

Nếu anh có IP server và user:

```bash
ssh root@YOUR_SERVER_IP
```

Nếu dùng private key:

```bash
ssh -i ~/.ssh/YOUR_KEY root@YOUR_SERVER_IP
```

Nếu server chạy SSH port khác 22:

```bash
ssh -p 2222 root@YOUR_SERVER_IP
```

## 2. Cấu hình DNS cho domain

Tại nơi quản lý DNS của `phucpink.io.vn`, tạo bản ghi:

- Type: `A`
- Host: `ojt`
- Value: `YOUR_SERVER_IP`

Kiểm tra sau khi trỏ xong:

```bash
nslookup ojt.phucpink.io.vn
```

Hoặc:

```bash
dig +short ojt.phucpink.io.vn
```

Kết quả phải trả về đúng IP server.

## 3. Build và đẩy source lên server

Từ máy đang chứa project này:

```bash
chmod +x deploy/deploy.sh
./deploy/deploy.sh root YOUR_SERVER_IP /var/www/autopaint
```

Script sẽ:

1. `npm install`
2. `npm run build`
3. Tạo thư mục `/var/www/autopaint/dist` trên server
4. Đồng bộ nội dung `dist/` lên server

## 4. Cài nginx trên server

Trên server Ubuntu/Debian:

```bash
apt update
apt install -y nginx
mkdir -p /var/www/autopaint/dist
```

Copy file cấu hình đã chuẩn bị sẵn:

```bash
cp /path/to/uploaded/project/deploy/nginx/autopaint.conf /etc/nginx/sites-available/autopaint
ln -sf /etc/nginx/sites-available/autopaint /etc/nginx/sites-enabled/autopaint
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

Nếu project không nằm trên server đầy đủ, anh có thể tự tạo file:

```nginx
server {
    listen 80;
    server_name ojt.phucpink.io.vn;

    root /var/www/autopaint/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        access_log off;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }
}
```

## 5. Mở firewall

Nếu dùng UFW:

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

## 6. Bật HTTPS với Let's Encrypt

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d ojt.phucpink.io.vn
```

Sau đó kiểm tra tự gia hạn:

```bash
systemctl status certbot.timer
```

## 7. Kiểm tra sau deploy

```bash
curl -I http://ojt.phucpink.io.vn
curl -I https://ojt.phucpink.io.vn
```

Trên server:

```bash
systemctl status nginx
journalctl -u nginx -n 100 --no-pager
```

## Lưu ý quan trọng

Trong code hiện tại, `GEMINI_API_KEY` được inject vào frontend ở bước build qua `vite.config.ts`. Điều đó có nghĩa là nếu app thực sự dùng key này ở client thì key có thể bị lộ trong file JS đã build. Nếu anh muốn an toàn, cần chuyển phần gọi Gemini sang backend/API server thay vì để ở frontend.
