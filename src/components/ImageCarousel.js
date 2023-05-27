import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Import your images
const images = [
  require('../images/slider.png'),
  require('../images/slider.png'),
  require('../images/slider.png'),
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePagination = (index) => {
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => handlePagination(index)}
    >
      <Image source={item} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
          );
          setActiveIndex(index);
        }}
      />
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
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
    elevation: 5
  },
  image: {
    width: 353,
    height: 161,
    resizeMode: 'cover',
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

export default ImageCarousel;
