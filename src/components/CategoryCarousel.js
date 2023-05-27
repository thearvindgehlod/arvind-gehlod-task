import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Import your images
const images = [
    require('../images/category1.png'),
    require('../images/category2.png'),
    require('../images/category3.png'),
    require('../images/category1.png'),
    require('../images/category2.png'),
    require('../images/category3.png'),
    require('../images/category1.png'),
    require('../images/category2.png'),
    require('../images/category3.png'),
 
    // Add more images as needed
];

const CategoryCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePagination = (index) => {
        setActiveIndex(index);
    };

    const renderSlide = ({ item, index }) => {
        const startIndex = index * 3;
        const endIndex = startIndex + 3;
        const slideImages = images.slice(startIndex, endIndex);

        return (
            <View style={styles.slideContainer}>
                {slideImages.map((image, imageIndex) => (
                    <TouchableOpacity
                        key={startIndex + imageIndex}
                        activeOpacity={0.9}
                        // onPress={() => handlePagination(startIndex + imageIndex)}
                    >
                        <Image source={image} style={styles.image} />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={Array(Math.ceil(images.length / 3)).fill(0)}
                renderItem={renderSlide}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
                    );
                    setActiveIndex(index);
                }}
            />
            <View style={styles.paginationContainer}>
                {Array(Math.ceil(images.length / 3)).fill(0).map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.paginationDot,
                            index === activeIndex ? styles.activePaginationDot : null,
                        ]}
                        onPress={() => handlePagination(index)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 108,
        height: 105,
        resizeMode: 'cover',
        marginHorizontal: 5,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 4,
        backgroundColor: '#BBBBBB',
        marginHorizontal: 3,
      },
      activePaginationDot: {
        backgroundColor: '#FAC0A4',
      },
});

export default CategoryCarousel;
