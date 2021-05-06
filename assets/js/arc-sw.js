importScripts('https://arc.io/arc-sw-core.js')

server {
    location = /arc-sw.js {
    proxy_pass https://arc.io;
        proxy_ssl_server_name on;
}
}