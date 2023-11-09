import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Box, Button, HStack, Heading, Image, ScrollView, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { Gap } from '../components';

const DetailProduct = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box p={3}>
                    <Heading fontSize="30" >LIVIK</Heading>
                    <Box>
                        <Image source={require('../assets/hrv.png')} height={300} alt='car' />
                    </Box>
                    <Box>
                        <Heading size={"xl"}>Honda HRV</Heading>
                        <Text fontSize={16}>Banyu Urip, Surabaya</Text>
                        <Text fontSize={16} color={"pink.700"} bold>Price Rp. 500.000,- / DAY</Text>
                        <Gap height={8} />
                        <HStack alignItems={"center"}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} size={"md"}></Avatar>
                            <Gap width={12} />
                            <Heading size={"xs"}>Wibisono Wijoyo Saputro Mandra Guno</Heading>
                        </HStack>
                        <Gap height={12} />
                        <HStack justifyContent={"space-between"} p={2}>
                            <Text fontSize={12}>Rate 90/100 % Complete Book</Text>
                            <Text fontSize={12}>Response Chat Rate 96% dibalas</Text>
                        </HStack>
                    </Box>
                    <Gap height={12} />
                    <Box borderWidth={0.5} />
                    <Gap height={12} />
                    <Box>
                        <Heading size={"md"}>Spesification</Heading>
                        <Gap height={10} />
                        <Text>- 2 wd</Text>
                        <Text>- 4 seater</Text>
                        <Text>- Minimum bensin ron 92</Text>
                    </Box>
                    <Gap height={12} />
                    <Box borderWidth={0.5} />
                    <Gap height={12} />
                    <Box>
                        <Heading size={"md"}>Description</Heading>
                        <Gap height={10} />
                        <Text>Honda HRV Terbaru</Text>
                        <Text>- Layanan lepas kunci</Text>
                        <Text>- Kendaraan bersih dan wangi</Text>
                        <Text>- Batas penggunaan 250km</Text>
                        <Text>- Detail informasi mobil bisa hub +6287853546715</Text>
                    </Box>
                </Box>
                <Box p={5}>
                    <HStack justifyContent={"space-between"}>
                        <TouchableOpacity>
                            <Box alignItems={"center"} backgroundColor={"white"} p={3} borderRadius={8} width={110} shadow={"2"} borderWidth={0.5}>
                                <Heading color={"black"} fontSize={"sm"}>Contact</Heading>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Box alignItems={"center"} backgroundColor={"#5997E0"} p={3} borderRadius={8} width={110} shadow={"2"} borderWidth={0.5}>
                                <Heading color={"white"} fontSize={"sm"}>Book</Heading>
                            </Box>
                        </TouchableOpacity>
                        {/* <Button backgroundColor={"white"} color={"black"} height={30}>Contact</Button> */}
                    </HStack>
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailProduct;