# Windows

## 儲存空間

[系統C槽的安裝應用程式的的儲存空間顯示異常，不到50GB卻顯示119GB - Microsoft 社群](https://answers.microsoft.com/zh-hant/windows/forum/all/%E7%B3%BB%E7%B5%B1c%E6%A7%BD%E7%9A%84%E5%AE%89/91cd586e-1fc6-41d5-a419-375fe476df14)

```powershell
docker system prune -a
```

發現 `User\...\AppData\Local\Docker\wsl\data\ext4.vhdx` 勁大，我佔咗 100GB

用上面個指令都 clean 唔到

[windows subsystem for linux - Docker Desktop WSL ext4.vhdx too large - Stack Overflow](https://stackoverflow.com/questions/70946140/docker-desktop-wsl-ext4-vhdx-too-large)

Docker Desktop, debug icon on title bar, `Clean / Purge data`

## TreeSize

攞嚟睇儲存空間裝咗啲咩，幾方便

https://www.jam-software.com/treesize_free#different-versions-for-different-requirements


