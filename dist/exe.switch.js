(function(){/*
 MIT */
'use strict';function a(){var e=b,f=0;return function(){return f<e.length?{done:!1,value:e[f++]}:{done:!0}}}function c(){switch(d.value){case "create":return"Created!";case "forgotPassword":return"Password reset sent!";case "newPassword":return"Password created!";case "editPassword":return"Password saved!"}}var g,b=["create","forgotPassword","newPassword","editPassword"],h="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator],k;h?k=h.call(b):k={next:a()};g=k;
for(var d=g.next();!d.done;d=g.next())console.log(c());}).call(this);
