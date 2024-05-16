import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useAuth } from "../context/useAuth";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { api } from "../services/api";
import UserPhoto from "../assets/user.png";

export default function Profile() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={{ backgroundColor: "#1B1B1F", alignItems: "center" }}>
        <View style={style.header}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="pencil" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: 28, fontWeight: "600", color: "#ffffff" }}>
            Perfil
          </Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="logout" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* <View style={style.profileImageContainer}>
          <TouchableOpacity style={style.cameraButton}>
            <MaterialIcons name="camera-alt" size={32} color="white" />
          </TouchableOpacity>
        </View> */}
      </View>
      <Text style={style.username}>{username}</Text>

      <View
        style={{
          padding: 16,
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            gap: 16,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
            }}
          >
            Meus Dados
          </Text>
          <View style={style.inputBox}>
            <Feather name="user" size={24} color="#8a8787" />
            <TextInput
              value={username}
              style={style.input}
              onChangeText={(text) => setUsername(text)}
              placeholderTextColor="#AEAEB3"
            />
          </View>
          <View style={style.inputBox}>
            <Feather name="mail" size={24} color="#8a8787" />
            <TextInput
              value={email}
              style={style.input}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="#AEAEB3"
            />
          </View>
          <View>
            <View style={style.inputBox}>
              <Feather name="lock" size={24} color="#8a8787" />
              <TextInput
                style={style.input}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                placeholderTextColor="#AEAEB3"
                secureTextEntry
                placeholder="Senha atual ou nova senha"
              />
            </View>
            <Text style={style.error}>{error}</Text>
          </View>
        </View>
        <View style={{ gap: 8, marginTop: 16, flexDirection: "row" }}>
          <MyButton style={{ flex: 1 }} text="Cancelar" />
          <MyButton style={{ flex: 1 }} text="Salvar alterações" />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  header: {
    backgroundColor: "#1B1B1F",
    width: "100%",
    padding: 12,
    height: 100,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImageContainer: {
    alignItems: "center",
    position: "relative",
    marginTop: 20,
    marginBottom: -100,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: "#DC1637",
  },
  username: {
    alignSelf: "center",
    marginTop: 120,
    width: "60%",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 40,
    fontWeight: "600",
  },
  cameraButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#DC1637",
    padding: 8,
    borderRadius: 100,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#8a8787",
    borderRadius: 4,
    width: "100%",
  },

  input: {
    flex: 1,
    fontSize: 18,
  },
  error: {
    color: "#DC1637",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 8,
  },
});
