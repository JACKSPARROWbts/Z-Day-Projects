const electron=require('electron');
const path=require('path');
const{app,BrowserWindow,Menu}=electron;
let mainwindow;
app.on('ready',()=>{
    mainwindow=new BrowserWindow({
        height:700,
        width:900,
        icon:__dirname+"/One_For_All.png",
        webPreferences:{
            nodeIntegration:true,
            devTools:true
        }
    })
    const mainMenu=Menu.buildFromTemplate(mainTemplate);
    Menu.setApplicationMenu(mainMenu);
    mainwindow.loadURL(__dirname+'/index.html');
    mainwindow.on('close',()=>{
        app.quit();
    })
});
const mainTemplate=[
    {
     label:"Back",
     click(){
          mainwindow.webContents.canGoBack()
          ?mainwindow.webContents.goBack()
          :null
     }
    },
    {
        label:"Forward",
        click(){
            mainwindow.webContents.canGoForward()
            ?mainwindow.webContents.goForward()
            :null
        }
    },
]