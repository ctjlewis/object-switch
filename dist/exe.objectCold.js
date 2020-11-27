(function(){/*
 MIT */
'use strict';function a(){var e=b,f=0;return function(){return f<e.length?{done:!1,value:e[f++]}:{done:!0}}}var c={create:"Created!",b:"Password reset sent!",c:"Password created!",a:"Password saved!"},d,b=["create","forgotPassword","newPassword","editPassword"],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator],h;g?h=g.call(b):h={next:a()};d=h;for(var k=d.next();!k.done;k=d.next())console.log(c[k.value]);}).call(this);
