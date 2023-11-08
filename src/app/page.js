import  Background  from "@/components/mylinks/Background";
import  MyLinksBody  from "@/components/mylinks/MyLinksBody";
import  MyLinksHeader  from "@/components/mylinks/MyLinksHeader";

export default function Home() {
  return (
    <div className="items-center">
      <Background />
      <MyLinksHeader />
      <MyLinksBody />
    </div>
  );
}
