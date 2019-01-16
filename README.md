### 树型控件  

#### 目录  
- web 前端  
- server 后台  

#### 运行　　

> 开发模式  

- 运行前端  

```  
cd web && npm run dev
```  

- 启动后台  

```  
cd server && npm run server 
```  

> 生产模式  

- 打包前端文件  

```
cd web && npm run build
```  

`webpack`打包完成后会自动将`build`复制到`server`目录下  

- 启动服务器  

```
cd server && npm run server
```