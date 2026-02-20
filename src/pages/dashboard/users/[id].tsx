import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { User } from "@/features/dashboard/users";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import Header from "@/features/dashboard/users/components/user-details/Header";
import TabsSection from "../../../features/dashboard/users/components/user-details/TabsSection";

interface Props {
  user: User;
}

export default function UserPage({ user }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          {/* Header */}
          <Header user={user} />

          {/* Tabs */}
          <TabsSection user={user} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
    notFound: !user.id,
  };
};
