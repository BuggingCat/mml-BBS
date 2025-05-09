# mml-BBS

the first time I gain insight in Javascript frontend & backend

I'm happy to see these code run without bugs!

![屏幕截图_9-5-2025_13933_192 168 68 55](https://github.com/user-attachments/assets/be3fbe26-7af4-4b12-b17b-53f04cc26fcd)

## Introduction

Inspired by Vislab's BBS, I made this simple one. It’s a great way to record thoughts, moments, meeting summaries, or reading notes through posts. I also thought it would be fun to include location data when posting—just like Xiaohongshu (RedNote), where users can "check in" during their travels. You can post some messages on mml's BBS and it supports markdown format. All the posts are stored in a local `db.json` file.

Here's **how to use** the MML's BBS:

## How to use

0. before that, you may **set up the environment** like this

   ```shell
   # backend
   npm init -y # get package.json
   npm install express cors body-parser # install the packages
   npm install lowdb@3 # low version of lowdb
   
   # frontend
   npm install anywhere -g
   ```

   if you want to get your location when you post, sign up a Mapbox account in https://www.mapbox.com/ and get your token, put the token in `const token`

   ```javascript
   // in public/index.html
   function getUserCity() {
         return new Promise((resolve, reject) => {
           navigator.geolocation.getCurrentPosition(success => {
             const { latitude, longitude } = success.coords;
             console.log(`Got coordinates: ${latitude}, ${longitude}`);
   
             const token = 'your token';
   ```

1. First run the **backend**

   ```shell
   cd BBSmarkdown
   node server.js
   ```

2. Then in **frontend**

   ```shell
   cd public
   anywhere
   ```

3. Now you can enter the **https** website where frontend is running. If you want to share your **location** when you post, be sure to allow the browser to get your location.
