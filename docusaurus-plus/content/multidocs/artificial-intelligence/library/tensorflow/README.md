# TensorFlow

[Install TensorFlow with pip](https://www.tensorflow.org/install/pip)

有時留意一下中文版本可能唔係最新

例如目前英文版本教 install `tensorflow[and-cuda]` 但中文版冇

## Verify installation

### CPU 

```bash
python3 -c "import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))"
```

### GPU

```bash
python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```

