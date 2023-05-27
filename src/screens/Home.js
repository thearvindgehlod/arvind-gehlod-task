import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ImageCarousel from '../components/ImageCarousel'
import CategoryCarousel from '../components/CategoryCarousel'
import CategoryHeader from '../components/reusableComponents/CategoryHeader'
import ProductCarousel from '../components/ProductCarousel'
import FlashDealCarousel from '../components/FlashDealCarousel'



export default function Home() {
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={styles.mainContainer}>
                {/* header start*/}

                <View style={styles.header}>
                    <View style={{ top: 10 }}>
                        <Entypo name="menu" color="#EC1C24" size={25} />
                    </View>
                    <View>
                        <Image source={require('../images/Logo.png')} style={styles.logo} />
                    </View>
                    <View style={{ flexDirection: "row", top: 15, right: 20 }}>
                        <Octicons name='globe' color="#EC1C24" size={20} />
                        <Text style={{
                            fontFamily: "Inter", fontWeight: "800", fontSize: 12, left: 5, top: 2
                        }} >EN</Text>
                    </View>
                </View>

                {/* header ends */}

                {/* search input starts */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
                    <FontAwesome name="search" size={18} color="#BBBBBB" style={styles.icon} />
                </View>

                {/* serach inputs ends */}
                <View style={{ marginBottom: "95%" }}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {/* crousel starts */}

                        <View>
                            <ImageCarousel />
                        </View>

                        {/* crousel ends */}

                        {/* category section starts */}

                        <View>
                            <CategoryHeader CatName={"Categories"} />
                        </View>

                        <View>
                            <CategoryCarousel />
                        </View>

                        {/* category section ends */}

                        {/* todays deal section starts */}

                        <View>
                            <CategoryHeader CatName={"Today's Deal"} />
                        </View>

                        <View>
                            <ProductCarousel />
                        </View>

                        {/* todays deals section ends */}

                        {/* todays deal section starts */}

                        <View>
                            <CategoryHeader CatName={"Flash Deal"} />
                        </View>

                        <View>
                            <FlashDealCarousel showPagination={true} />
                        </View>

                        {/* todays deals section ends */}

                        {/* banner */}

                        <View style={{}}>
                            <Image source={require("../images/promotional-banner.png")} style={{height:98,width:355}} />
                        </View>

                         {/* todays deal section starts */}

                         <View>
                            <CategoryHeader CatName={"Popular Products"} />
                        </View>

                        <View>
                            <FlashDealCarousel showPagination={false} />
                            <FlashDealCarousel showPagination={false} />
                        </View>

                        {/* todays deals section ends */}

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        marginTop: 7,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        height: 45,
        width: 120
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        padding: 3,
        marginTop: 15,
        marginBottom: 5

    },
    input: {
        flex: 1,
        height: 35,
        color: '#333',
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 8,
    },
    categoriesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    categoryButton: {
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
    categoryButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewAllContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    viewAllButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    viewAllButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})


