# Shell script

## Lowercasing and Replacing Spaces with Hyphens

Renames files within the current directory and its subdirectories by converting file names to lowercase and replacing spaces and underscores with hyphens

將檔案名稱轉換為小寫，用連字符替換空格和下劃線，重命名當前目錄及其子目錄中的文件

```bash
find . -depth -name "*[ _]*" -execdir bash -c 'mv -i "$1" "$(echo $1 | tr "[:upper:]" "[:lower:]" | tr " _" "--")"' _ {} \;
```




