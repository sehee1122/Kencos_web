# MedicalStandard

```
npm install vue-cli   // 2.x.x
npm install @vue/cli  // 3.x.x

yarn global add @vue/cli
```

npx vue --version
vue create todo
```
vue create 'project-name'       // vue-cli 3.x
vue init webpack 'project-name' // vue-cli 2.x
```

```
[shpark@localhost todo-vue]$ npx vue create todo

  vue create is a Vue CLI 3 only command and you are using Vue CLI 2.9.6.
  You may want to run the following to upgrade to Vue CLI 3:

  npm uninstall -g vue-cli
  npm install -g @vue/cli
```

Please pick a preset > default (babel, eslint), Manually select features
Yarn serve, NPM run serve

```
cd todo/
npx idea .
```
```
npm run serve
```

 DONE  Compiled successfully in 1853ms                         9:57:39 ├F10: AM┤


  App running at:
  - Local:   http://localhost:8081/
  - Network: http://192.168.1.70:8081/

  Note that the development build is not optimized.
  To create a production build, run npm run build.

```
npm run build
```

 DONE  Compiled successfully in 3419ms                        10:00:13 ├F10: AM┤

  File                                 Size               Gzipped

  dist/js/chunk-vendors.468a5298.js    89.18 KiB          31.94 KiB
  dist/js/app.78a04898.js              4.62 KiB           1.65 KiB
  dist/css/app.fb0c6e1c.css            0.33 KiB           0.23 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html

```
npm run serve -- --port 4000
```

