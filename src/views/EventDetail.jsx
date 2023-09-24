import pb from "@/api/pocketbase";
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
        const currentEvent = await pb.collection("events").getOne(eventId);
        const EventContentData = await pb.collection("events").getFullList({
          sort: "-created",
        });

        const currentEventIndex = EventContentData.findIndex((n) => n.id === currentEvent.id);
        const previousEventTitle = EventContentData[currentEventIndex + 1]?.title;
        const previousEventId = EventContentData[currentEventIndex + 1]?.id;
        const nextEventTitle = EventContentData[currentEventIndex - 1]?.title;
        const nextEventId = EventContentData[currentEventIndex - 1]?.id;

        return { ...currentEvent, EventContentData, previousEventTitle, previousEventId, nextEventTitle, nextEventId };
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
