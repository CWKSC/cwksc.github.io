# Dataset

## load_dataset

https://huggingface.co/docs/datasets/v2.21.0/en/package_reference/loading_methods#datasets.load_dataset

> split (Split or str) — Which split of the data to load. If None, will return a dict with all splits (typically datasets.Split.TRAIN and datasets.Split.TEST). If given, will return a single Dataset. Splits can be combined and specified like in tensorflow-datasets.

有 `train[:1%]` 這種寫法去減少數據量，快速跑一次流程



## save_to_disk / load_from_disk 

[Save and load datasets - 🤗Datasets - Hugging Face Forums](https://discuss.huggingface.co/t/save-and-load-datasets/9260)

[How do I save a Huggingface dataset? - Stack Overflow](https://stackoverflow.com/questions/72021814/how-do-i-save-a-huggingface-dataset)


```python
from datasets import load_dataset
  
test_dataset = load_dataset("json", data_files="test.json", split="train")

test_dataset.save_to_disk("test.hf")
```
