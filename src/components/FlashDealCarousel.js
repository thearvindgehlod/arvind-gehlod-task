import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';

const images = [
  {
    image: require('../images/product3.png'),
    discount: 'New',
    price: '$25.00',
    sold: '4.8k',
    name: 'LFK Atramic Double Hand Wok Pan(28cm)',
  },
  {
    image: require('../images/product4.png'),
    discount: '15% off',
    price: '$50.00',
    sold: '3.8k',
    name: 'LFK Circle Gold Wok (32cm)',
  },
  {
    image: require('../images/product3.png'),
    discount: 'New',
    price: '$25.00',
    sold: '4.8k',
    name: 'LFK Atramic Double Hand Wok Pan(28cm)',
  },
  {
    image: require('../images/product4.png'),
    discount: '15% off',
    price: '$50.00',
    sold: '3.8k',
    name: 'LFK Circle Gold Wok (32cm)',
  },
 
  // Add more products as needed
];


const FlashDealCarousel = ({showPagination}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePagination = (index) => {
    setActiveIndex(index);
  };

  const renderSlide = ({ item, index }) => {
    const startIndex = index * 2;
    const endIndex = startIndex + 2;
    const slideProducts = images.slice(startIndex, endIndex);

    return (
      <View style={styles.slideContainer}>
        {slideProducts.map((product, productIndex) => (
          <TouchableOpacity
            key={startIndex + productIndex}
            activeOpacity={0.9}
            onPress={() => handlePagination(startIndex + productIndex)}
          >
            <View style={styles.container1}>
              <View style={styles.imageContainer}>
                {/* Replace the image source with your desired image */}
                <Image
                  source={product.image}
                  style={styles.image}
                />
                <View style={styles.discountContainer}>
                  <Text style={styles.discountText}>{product.discount}</Text>
                </View>
              </View>
              <View style={styles.detailsContainer}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{product.price}</Text>
                  <Text style={styles.soldText}>{product.sold}<Text style={{color:"black",fontWeight:"bold"}} > Sold</Text></Text>
                </View>
                <Text style={styles.productName}>{product.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={Array(Math.ceil(images.length / 2)).fill(0)}
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
      {showPagination === true ?  
      <View style={styles.paginationContainer}>
        {Array(Math.ceil(images.length / 2)).fill(0).map((_, index) => (
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
      : null }
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
  container1: {
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 12,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  discountContainer: {
    position: 'absolute',
    right: 5,
    backgroundColor: '#FAC0A4',
    paddingHorizontal: 3,
    borderRadius: 4,
  },
  discountText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: "#000"
  },
  detailsContainer: {
    marginTop: 8,

  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    color:"#000"
  },
  soldText: {
    fontSize: 13,
    color: 'red',
    marginLeft: 40,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000",
    width: 140
  },
});

export default FlashDealCarousel;
