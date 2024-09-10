# Python related

## Use conda

https://saturncloud.io/blog/how-to-install-conda-package-to-google-colab/

```bash
!pip install -q condacolab
```

```python
import condacolab
condacolab.install()
```

https://datascience.stackexchange.com/questions/75948/how-to-setup-and-run-conda-on-google-colab/75979#75979

> Unfortunately in condacolab only base environment can be used. Avoid creating new environments

## Change python version

改 python version 勁麻煩，大機率失敗，唔建議搞

https://stackoverflow.com/questions/63168301/how-to-change-the-python-version-from-default-3-5-to-3-8-of-google-colab

https://stackoverflow.com/questions/68657341/how-can-i-update-google-colabs-python-version

### Change python version from 3.10 to 3.9

Reference to https://stackoverflow.com/a/78413447/11693034

Maybe `old_google_colab_python_version` not `3.10`, Colab will update to `3.11` or newer

```bash
%env old_google_colab_python_version=3.10
%env target_python_version=3.9
!sudo apt-get update -y > /dev/null
!sudo apt-get install dialog whiptail > /dev/null
!sudo apt-get install python${target_python_version} > /dev/null
!sudo apt-get install python${target_python_version}-dev > /dev/null
!sudo apt-get install python${target_python_version}-distutils > /dev/null
!sudo apt-get install libpython${target_python_version}-dev > /dev/null
!sudo apt-get install python${target_python_version}-venv > /dev/null
!sudo apt-get install binfmt-support > /dev/null
!sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python${target_python_version} 1 > /dev/null
!curl -sS https://bootstrap.pypa.io/get-pip.py | python${target_python_version} > /dev/null
!python3 -m pip install ipython==8.10.0 > /dev/null
!python3 -m pip install traitlets > /dev/null
!python3 -m pip install jupyter > /dev/null
!python3 -m pip install psutil > /dev/null
!python3 -m pip install matplotlib > /dev/null
!python3 -m pip install setuptools > /dev/null
!python3 -m pip install ipython_genutils > /dev/null
!python3 -m pip install ipykernel > /dev/null
!python3 -m pip install jupyter_console > /dev/null
!python3 -m pip install notebook > /dev/null
!python3 -m pip install prompt_toolkit > /dev/null
!python3 -m pip install httplib2 > /dev/null
!python3 -m pip install astor > /dev/null
!sudo apt-get autoremove > /dev/null
!ln -s /usr/local/lib/python${old_google_colab_python_version}/dist-packages/google /usr/local/lib/python${target_python_version}/dist-packages/google
!sed -i "s/from IPython.utils import traitlets as _traitlets/import traitlets as _traitlets/" /usr/local/lib/python${target_python_version}/dist-packages/google/colab/*.py
!sed -i "s/from IPython.utils import traitlets/import traitlets/" /usr/local/lib/python${target_python_version}/dist-packages/google/colab/*.py
```

### Restart Colab

```python
import os 
os.kill(os.getpid(), 9)
```

### Check python version

```bash
!which python
!python --version
!python3 --version
import sys
print(sys.version)
```

Output should like:

```bash
/usr/local/bin/python
Python 3.9.19
Python 3.9.19
3.9.19 (main, Apr  6 2024, 17:57:55) 
[GCC 11.4.0]
```
