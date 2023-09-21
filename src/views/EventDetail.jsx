import pb from "@/pockets";
import { useParams } from "react-router-dom";
import MenuTitle from "@/components/MenuTitle";
import { useQuery } from "@tanstack/react-query";
import JijoSpinner from "@/components/JijoSpinner";
import EventContent from "@/components/Event/EventContent";

function EventDetail() {
  const { eventId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["eventsDetail", eventId],
    queryFn: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const selectContentId = await pb.collection("events").getOne(eventId);
        const selectContentData = await pb.collection("events").getFullList({
          sort: "-created",
        });
        return { ...selectContentId, selectContentData };
      } catch (error) {
        throw error;
      }
    },
  });

  if (isLoading) {
    return (
      <div>
        <JijoSpinner />
      </div>
    );
  }

  if (isError) {
    return <div role="alert">{error.toString()}</div>;
  }
  return (
    <>
      <MenuTitle title="JIJO NEWS" mainMenu="지조소식" subMenu="이벤트">
        JIJO EVENT
      </MenuTitle>
      <EventContent data={data} />
    </>
  );
}

export default EventDetail;
