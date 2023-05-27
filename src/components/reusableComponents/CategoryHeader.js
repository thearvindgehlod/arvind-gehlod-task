import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function CategoryHeader({ CatName }) {
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.catName}>{CatName}</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={1} >
                        <Text style={styles.viewText}>View All</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    catName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        fontFamily: "Poppins"
    },
    viewText: {
        fontSize: 14,
        color: "#FAC0A4"
    }
})