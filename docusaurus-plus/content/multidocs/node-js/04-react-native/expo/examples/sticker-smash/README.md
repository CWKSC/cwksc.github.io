# StickerSmash

跟官方教學做一次: https://docs.expo.dev/tutorial/introduction/

View completed code in Snack: https://snack.expo.dev/@expo-team-snacks/image-app

這個 app 有：

- 選擇圖片

- 加入 emoji

- 觸摸手勢移動

- 截圖

- 儲存圖片

## Create your first app

https://docs.expo.dev/tutorial/create-your-first-app/

```bash
npx create-expo-app@latest StickerSmash --template blank
cd StickerSmash
npx expo install react-dom react-native-web @expo/metro-runtime
```

```bash
npx expo start
# or
npx expo start --tunnel
```

## Build a screen

https://docs.expo.dev/tutorial/build-a-screen/

```bash
npx expo install @expo/vector-icons
```

```jsx
<View style={styles.xxx} ...

const styles = StyleSheet.create({
    xxx: ...
})
```

```jsx
<Image source={...}
```

```jsx
<Pressable
    style={[styles.xxx, { yyy: ... }]}
    onPress={() => alert('You pressed a button.')}
>
```

## Use an image picker

https://docs.expo.dev/tutorial/image-picker/

```bash
npx expo install expo-image-picker
```

```jsx
import * as ImagePicker from 'expo-image-picker';

const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    });

    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
    } else {
        alert("You did not select any image.");
    }
};

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

    return <Image source={imageSource} style={styles.image} />;
}
```

## Create a modal

https://docs.expo.dev/tutorial/create-a-modal/

```jsx
export default function EmojiPicker({ isVisible, children, onClose }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
```

## Add gestures

```bash
npx expo install react-native-gesture-handler react-native-reanimated
```

```jsx
import { GestureHandlerRootView } from "react-native-gesture-handler";

<GestureHandlerRootView style={styles.container}>
```

```jsx
import Animated from 'react-native-reanimated';

<Animated.Image
    source={stickerSource}
    resizeMode="contain"
    style={{ width: imageSize, height: imageSize }}
/>
```

```jsx
const scaleImage = useSharedValue(imageSize);
```

```jsx
const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
        if (scaleImage.value !== imageSize * 2) {
            scaleImage.value = scaleImage.value * 2;
        }
    });
```

```jsx
const imageStyle = useAnimatedStyle(() => {
    return {
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
    };
});
```

```jsx
const translateX = useSharedValue(0);
const translateY = useSharedValue(0);

const drag = Gesture.Pan()
    .onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

const containerStyle = useAnimatedStyle(() => {
    return {
        transform: [
            {
                translateX: translateX.value,
            },
            {
                translateY: translateY.value,
            },
        ],
    };
});

<GestureDetector gesture={drag}>
    <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
```

## Take a screenshot

https://docs.expo.dev/tutorial/screenshot/

```bash
npx expo install react-native-view-shot expo-media-library
```

```jsx
import * as MediaLibrary from 'expo-media-library';

const [status, requestPermission] = MediaLibrary.usePermissions();

if (status === null) {
    requestPermission();
}
```

https://github.com/gre/react-native-view-shot

```jsx
const imageRef = useRef();

const onSaveImageAsync = async () => {
    try {
        const localUri = await captureRef(imageRef, {
            height: 440,
            quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
            alert("Saved!");
        }
    } catch (e) {
        console.log(e);
    }
};

<View ref={imageRef} 
```

## Handle platform differences 


`react-native-view-shot` work in Android and iOS, but not in Web

Use `dom-to-image` for Web: https://github.com/tsayen/dom-to-image

```bash
npm install dom-to-image
```

```jsx
const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
        ...
    } else {
        try {
            const dataUrl = await domtoimage.toJpeg(imageRef.current, {
                quality: 0.95,
                width: 320,
                height: 440,
            });

            let link = document.createElement('a');
            link.download = 'sticker-smash.jpeg';
            link.href = dataUrl;
            link.click();
        } catch (e) {
            console.log(e);
        }
    }
```

## Configure status bar, splash screen and app icon

```jsx
import { StatusBar } from 'expo-status-bar';

<StatusBar style="auto" />
```

app.json

```json
{
    "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#25292e"
    },
    "icon": "./assets/images/icon.png"
}
```

