# Dataset

## load_dataset

https://huggingface.co/docs/datasets/v2.21.0/en/package_reference/loading_methods#datasets.load_dataset

> split (Split or str) — Which split of the data to load. If None, will return a dict with all splits (typically datasets.Split.TRAIN and datasets.Split.TEST). If given, will return a single Dataset. Splits can be combined and specified like in tensorflow-datasets.

有 `train[:1%]` 這種寫法去減少數據量，快速跑一次流程

## save_to_disk / load_from_disk 

[Save and load datasets - 🤗Datasets - Hugging Face Forums](https://discuss.huggingface.co/t/save-and-load-datasets/9260)

[How do I save a Huggingface dataset? - Stack Overflow](https://stackoverflow.com/questions/72021814/how-do-i-save-a-huggingface-dataset)

hf_hub_download 和 snapshot_download 都不能細緻選擇，像是 `train[:10%]`

有儲存到本地的需求時，全部下載會太大

load_dataset + save_to_disk + load_from_disk 可以解決問題

例如 `mozilla-foundation/common_voice_16_0`, `mn`, `train[:2%]+validation[:2%]`:

```python
from datasets import load_dataset, load_from_disk

DATASET_FOLDER = "/workspace/predownload/dataset"

common_voice_train = load_dataset(
    path="mozilla-foundation/common_voice_16_0", 
    name="mn", 
    split="train[:2%]+validation[:2%]", 
    trust_remote_code=True
)
print(common_voice_train)
common_voice_train.save_to_disk(f"{DATASET_FOLDER}/common-voice-mn/train")

common_voice_train_load_from_disk = load_from_disk(f"{DATASET_FOLDER}/common-voice-mn/train")
print(common_voice_train_load_from_disk)
```

```python
Dataset({
    features: ['client_id', 'path', 'audio', 'sentence', 'up_votes', 'down_votes', 'age', 'gender', 'accent', 'locale', 'segment', 'variant'],
    num_rows: 81
})
```

```python
common_voice_test = load_dataset(
    path="mozilla-foundation/common_voice_16_0", 
    name="mn", 
    split="test[:2%]", 
    trust_remote_code=True
)
print(common_voice_test)
common_voice_test.save_to_disk(f"{DATASET_FOLDER}/common-voice-mn/test")

common_voice_test_load_from_disk = load_from_disk(f"{DATASET_FOLDER}/common-voice-mn/test")
print(common_voice_test_load_from_disk)
```

```python
Dataset({
    features: ['client_id', 'path', 'audio', 'sentence', 'up_votes', 'down_votes', 'age', 'gender', 'accent', 'locale', 'segment', 'variant'],
    num_rows: 38
})
```

