# Google drive

## How to Install Libraries permanently in Google Colab?

安裝虛擬環境在 Google Drive, then mount

https://netraneupane.medium.com/how-to-install-libraries-permanently-in-google-colab-fb15a585d8a5

```python
from google.colab import drive
drive.mount('/content/drive', force_remount=True)
```

```python
import sys
sys.path.append("/content/drive/MyDrive/colab_env/lib/python3.10/site-packages")
```

