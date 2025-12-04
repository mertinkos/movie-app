import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function month(x: string){
    switch (x){
        case "01":
            return "January";
        case "02":
            return "February";
        case "03":
            return "March";
        case "04":
            return "April";
        case "05":
            return "May";
        case "06":
            return "June";
        case "07":
            return "July";
        case "08":
            return "August";
        case "09":
            return "September";
        case "10":
            return "October";
        case "11":
            return "November";
        case "12":
            return "December";
    }
}

function date(x: string | undefined){
    if(!x){
        return "Unknown";
    }
    return month(x.split("-")[1])+ " " + x.split("-")[0];
    
}

const MovieCard = ({id,poster_path,title, vote_average,release_date }: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <Image
                source={{
                    uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://placehold.co/600x400/1a1a1a/fffff.png`
                }} className='w-full h-52 rounded-lg' resizeMode='contain'
            />
            <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>
            <View className='flex-row items-center justify-start gap-x-1'>
                <Image source={icons.star}/>
                <Text className='text-xs text-white font-bold uppercase mt-0.5'>{Math.round(vote_average/2)}</Text>
            </View>
            <View className='flex-row items-center justify-between' >
                <Text className='text-xs text-light-300 font-medium mt-1 color-white'>{date(release_date)}</Text>
                <Text className='text-xs font-medium text-light-300 uppercase'>

                </Text>
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard