# Windows

## Closing cmd window after opening VSCode with batch scripts

https://stackoverflow.com/a/73617457/11693034

```cmd
echo | code . | exit /b
```

## How to pin .cmd to taskbar or start menu in Windows 11

https://www.elevenforum.com/t/pin-cmd-script-to-start-menu-and-or-taskbar.8095/

> You can pin a CMD batch file to Start Menu or Taskbar by the following procedure:
> 
> Right-mouse click on CMD script, and select create shortcut. This creates a shortcut in the same folder.
> 
> Go to the newly created shortcut and Right-mouse click on the file, and select Properties from the list.
>
> In the Properties window, under Target, add explorer  (with one space afterwards) to the target field.
>
> Once you've done that, the shortcut icon changes from a cmd icon to an explorer icon.
>
> Now you can pin this shortcut to either the Start Menu or the Taskbar, as required.


