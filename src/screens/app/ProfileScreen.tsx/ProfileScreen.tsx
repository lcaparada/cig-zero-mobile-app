import { useNavigation } from "@react-navigation/native";

import { Icon, Screen } from "@components";
import { AppScreenProps } from "@routes";

import { useGetProfile, useGetUserLastSmoke } from "@domain";
import { useAuth } from "@services";

import { LoadingSkeleton, ProfileDetails, ProfileHeader } from "./components";
import { PrivateProfileMessage } from "./components/PrivateProfileMessage";

export const ProfileScreen = ({ route }: AppScreenProps<"ProfileScreen">) => {
  const { session } = useAuth();
  const navigation = useNavigation();

  const { smokingRecord: latestSmokingRecord } = useGetUserLastSmoke(
    route.params.userId
  );
  const { profile, isLoading } = useGetProfile(route.params.userId);

  const isMineProfile = route.params.userId === session?.user.id;
  const showProfileForOtherPeople = profile?.visibilityStatus === "ALL";

  return (
    <Screen
      canGoBack
      screenTitle="Perfil"
      scrollable
      scrollViewPaddingBottom={120}
      rightComponent={
        isMineProfile ? (
          <Icon
            name="edit2"
            size="s22"
            color="primary"
            onPress={() => navigation.navigate("EditProfileScreen")}
          />
        ) : undefined
      }
    >
      {profile && !isLoading ? (
        <>
          <ProfileHeader isMineProfile={isMineProfile} profile={profile} />
          {showProfileForOtherPeople || isMineProfile ? (
            <ProfileDetails
              userId={route.params.userId}
              profile={profile}
              latestSmokingRecord={
                latestSmokingRecord ?? new Date().toISOString()
              }
            />
          ) : (
            <PrivateProfileMessage />
          )}
        </>
      ) : (
        <LoadingSkeleton />
      )}
    </Screen>
  );
};
