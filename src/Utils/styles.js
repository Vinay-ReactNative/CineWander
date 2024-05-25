import { Dimensions, PixelRatio, StyleSheet, } from "react-native";
import { Colors } from "./Colors";


const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const widthvalue = (width) => {
    return screenWidth / width
}
export const heightvalue = (height) => {
    return screenHeight / height
}

//padding
export const padding = (padding, paddingHorizontal, paddingVertical) => {
    return StyleSheet.create({ padding, paddingHorizontal, paddingVertical })
}
export const paddingPosition = (paddingTop, paddingRight, paddingBottom, paddingLeft) => {
    return StyleSheet.create({ paddingTop, paddingRight, paddingBottom, paddingLeft })
}
//margin
export const margin = (margin, marginHorizontal, marginVertical) => {
    return StyleSheet.create({ margin, marginHorizontal, marginVertical })
}

export const marginPosition = (marginTop, marginRight, marginBottom, marginLeft) => {
    return StyleSheet.create({ marginTop, marginRight, marginBottom, marginLeft })
}

//fontsize 

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')
const pixelRatio = PixelRatio.get()

//Baseline device  Dimensions (pixel 2 || Iphone 8)
const BASE_WIDTH = 375; //width  of baseline device
const BASE_HEIGHT = 667; //height of baseline device



//scale based on screen dimension
const scaleWidth = SCREEN_WIDTH / BASE_WIDTH;
const scaleHeight = SCREEN_HEIGHT / BASE_HEIGHT;
const scale = Math.min(scaleHeight, scaleWidth)

export const responsiveFontSize = (size) => {
    const newSize = size * scale;

    if (pixelRatio >= 2 && pixelRatio < 3) {
        if (newSize >= 16) {
            return newSize - 1;
        } else {
            return newSize - 0.5;
        }
    } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
        if (newSize >= 16) {
            return newSize - 2;
        } else {
            return newSize - 1;
        }
    } else if (pixelRatio >= 3.5) {
        if (newSize >= 16) {
            return newSize - 3;
        } else {
            return newSize - 1.5;
        }
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export const fontSize = (size) => {
    return StyleSheet.create({ fontSize: responsiveFontSize(size) })
}

export const fontWeight = (weight) => {
    return StyleSheet.create({ fontWeight: weight })
}

//flex

export const flex = (value) => {
    return StyleSheet.create({ flex: value })
}

//border 

export const borderwidth = (borderWidth, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth) => {
    return StyleSheet.create({ borderWidth, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth })
}

export const borderRadius = (borderRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius) => {
    return StyleSheet.create({ borderRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius })
}

export const styles = StyleSheet.create({
    //flex properties
    allCenter: { justifyContent: 'center', alignItems: 'center' },
    centerHorizontal: { alignItems: 'center' },
    centerVertical: { justifyContent: 'center' },
    row: { flexDirection: 'row' },
    spaceBetween: { justifyContent: 'space-between' },
    spaceAround: { justifyContent: "space-around" },
    spaceEvenly: { justifyContent: 'space-evenly' },
    flexStart: { justifyContent: 'flex-start' },
    flexEnd: { justifyContent: 'flex-end' },

    //colors
    White: { color: Colors.white },
    Black: { color: Colors.black },
    Red: { color: Colors.red },
    Dimwhite: { color: Colors.dimwhite },
    IconGray: { color: Colors.IconGray },
    activeRed: { color: Colors.activeRed },
    passiveRed: { color: Colors.passiveRed },

    //BackGroundColor

    bgDimwhite: { backgroundColor: Colors.black },
    bgRed: { backgroundColor: Colors.red },
    bgDimred: { backgroundColor: Colors.dimRed },
    bgWhite: { backgroundColor: Colors.white },
    bgDisabled: { backgroundColor: Colors.passiveRed },
    bgEnable: { backgroundColor: Colors.activeRed },
    bgBlack: { backgroundColor: Colors.black },
    bgdarkmode: { backgroundColor: Colors.darkmodeblack },

    //BorderColors

    borderDimwhite: { borderColor: Colors.dimwhite },
    borderBlack: { borderColor: Colors.dimblack },
    borderRed: { borderColor: Colors.red },

    //text properties
    textCenter: { textAlign: 'center' },
    textCenter: { textAlign: 'justify' },
    textCenter: { textAlign: 'left' },
    textCenter: { textAlign: 'right' },

})





