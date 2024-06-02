import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView, SectionList, Image } from 'react-native';
import Frame1 from './components/Frame1';
import CustomSearch from './components/Search';
import CustomCard from './components/Cards';
import Tasklist from './data.json';

export default function App() {
  const categories = [
    { name: "Exercise", taskno: "12 Tasks", image: require('./images/image1.jpg') },
    { name: "Study", taskno: "12 Tasks", image: require('./Images/image4.jpg') },
    { name: "Coding", taskno: "12 Tasks", image: require('./Images/coding.jpeg') },
    { name: "Cook", taskno: "12 Tasks", image: require('./Images/cook.jpeg') },
    { name: "Dance", taskno: "12 Tasks", image: require('./Images/dancing.jpeg') },
    { name: "Music", taskno: "12 Tasks", image: require('./Images/music.jpeg') },
    { name: "Laundry", taskno: "12 Tasks", image: require('./Images/laundry.jpeg') },
    { name: "Karate", taskno: "12 Tasks", image: require('./Images/karate.jpeg') },
    { name: "Soccer", taskno: "12 Tasks", image: require('./Images/soccer.jpeg') }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Frame1 />
        <CustomSearch />
        <ScrollView style={styles.cardContainer}>
          <Text style={styles.categoryText}>Categories</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {categories.map((category, index) => (
              <CustomCard key={index} {...category} />
            ))}
          </ScrollView>
        </ScrollView>
        <SectionList
          sections={Tasklist}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.headerStyle}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 16, marginBottom: 10 }} />}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 20,
    borderRadius: 35,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  cardContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    elevation: 5,
    padding: 16,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

