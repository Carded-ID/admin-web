import React, { useCallback, useState } from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../Dnd/StrictModeDroppable";
import LinkItem from "./LinkItem";
import styles from "./Links.module.css";

export type LinkType = {
  id: string;
  text: string;
};

const reorder = (list: LinkType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const testLinks: LinkType[] = [
  { id: "id-0", text: "link 0" },
  { id: "id-1", text: "link 1" },
  { id: "id-2", text: "link 2" },
  { id: "id-3", text: "link 3" },
];
const LinkList = React.memo(function LinkList({
  links,
}: {
  links: LinkType[];
}) {
  return (
    <>
      {links.map((link, index) => (
        <LinkItem link={link} index={index} key={link.id} />
      ))}
    </>
  );
});

const Links = () => {
  const [links, setLinks] = useState<LinkType[]>(testLinks);
  const onDragEnd = useCallback<OnDragEndResponder>((result) => {
    // dropped outside of list
    if (!result.destination) return;

    // no change
    if (result.destination.index === result.source.index) return;

    setLinks((links) =>
      reorder(links, result.source.index, result.destination!.index)
    );
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className={styles.linksContainer}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {/* {links.map((value, index) => (
              <LinkItem link={value} index={index} key={value.id} />
            ))} */}
            <LinkList links={links} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Links;
