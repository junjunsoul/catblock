// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.
var time=3000
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
      if(info.url.indexOf('https://accounts.google.com/signin')>-1){//登录
        setTimeout(function(){
          chrome.tabs.executeScript(null, {file: "js/jquery.min.js"});
          chrome.tabs.executeScript(null, {file: "js/index.js"});
        },time)
      }else if(info.url.indexOf('https://myaccount.google.com')>-1){//跳转主页
        setTimeout(function(){
          chrome.tabs.executeScript({
            code: `
              location.href="https://play.google.com/store"
            `
          });
        },time)
      }else if(info.url.indexOf('https://play.google.com/store')>-1){//搜索
        setTimeout(function(){
          chrome.tabs.executeScript(null, {file: "js/jquery.min.js"});
          chrome.tabs.executeScript(null, {file: "js/download.js"});
        },time)
      }
  },
  {
    urls: ["<all_urls>"],
    types: ["main_frame"]
  },
  ["blocking"]);
