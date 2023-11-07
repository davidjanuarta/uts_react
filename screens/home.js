import { Heading, Image, Text, FlatList, Center, View, Container, } from "native-base";
import { Box, ScrollView,SafeAreaView,Avatar } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const Home = () => {
  const navigation = useNavigation();
  const renderitem = ({ item }) => {
    return (
      <Header title={"For You"} />
      <Center flex={1}>
        <Heading>For You</Heading>
      </Center>
      
      
  );
  
};
}



export default Home;
