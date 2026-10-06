self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
self.addEventListener('push',function(e){var d={};try{d=e.data.json()}catch(x){}
e.waitUntil(self.registration.showNotification(d.title||'Remember',{body:d.body||'',icon:'/icon-192.png'}))});
self.addEventListener('notificationclick',function(e){e.notification.close();e.waitUntil(self.clients.openWindow('/'))});
