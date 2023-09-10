import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapContainer = styled.View`
  width: 327px;
  height: 345px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const IconImage = styled.Image`
  width: 72px;
  height: 72px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

export const AttentionText = styled.Text`
  font-size: 12px;
  margin-top: 10px;
  padding: 15px;
  text-align: center;
`;

export const EmergencyButton = styled.TouchableOpacity`
  width: 240px;
  height: 30px;
  background-color: #e53935;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const EmergencyButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
