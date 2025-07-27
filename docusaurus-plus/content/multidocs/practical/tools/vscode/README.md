# VSCode

## Cannot recognize `PATH` udpate

[cmd - VS Code terminal doesn't recognize PATH variables - Stack Overflow](https://stackoverflow.com/questions/44868656/vs-code-terminal-doesnt-recognize-path-variables)

Update 完環境變量，Restart VSCode，之後還是 cannot recognize

可以嘗試打開 Command Palette (`Ctrl + Shift + P`)，輸入：

```
> Terminal: Kill the Active Terminal Instance
> Terminal: Create New Terminal
```

## 自動化 attach to container

[visual studio code - How to attach a remote container using vscode command line? - Stack Overflow](https://stackoverflow.com/questions/60379221/how-to-attach-a-remote-container-using-vscode-command-line)

`code` CLI 呼叫格式如下：

```cmd
code --folder-uri vscode-remote://attached-container+<container_name_in_hex>/<path>
```

注意 `<container_name_in_hex>` 是 container name 的 hex 而不是 id 

例如我開一個 `python:3.12` image 的 container，然後把他命名為 `python-3.12-container`

隨便網上找一個 string 轉換 hex 的工具 ([Google](https://www.google.com/search?q=string+to+hex))

`python-3.12-container` 的 hex 是 `707974686f6e2d332e31322d636f6e7461696e6572`

```cmd
docker container run ^
    --detach ^
    --interactive ^
    --name "python-3.12-container" ^
    --tty ^
    python:3.12

code --folder-uri vscode-remote://attached-container+707974686f6e2d332e31322d636f6e7461696e6572/
```

加 `--detach`, `--interactive` 和 `--tty` 是為了令 container 不要一打開就退出



