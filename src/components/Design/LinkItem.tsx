import React, { FC, useMemo, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaGripLines } from "react-icons/fa";
import styles from "./LinkItem.module.css";
import { LinkType } from "./Links";

enum TextType {
  title = "title",
  link = "link",
}

interface LinkTextProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<boolean>;
  text: string;
  textType: TextType;
}

const LinkText: FC<LinkTextProps> = ({
  isEditing,
  setIsEditing,
  text,
  textType,
}) => {
  const [editValue, setEditValue] = useState(text);
  const handleCLick = (e: React.MouseEvent) => {
    setIsEditing(true);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const textTypeStyle = useMemo(() => {
    switch (textType) {
      case TextType.title:
        return styles.title;
      case TextType.link:
        return styles.link;
    }
  }, [textType]);
  return (
    <>
      {isEditing ? (
        <form
          className={`${styles.linkWrapper} ${textTypeStyle}`}
          onSubmit={handleSubmit}
        >
          <input
            className={styles.text}
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
            autoFocus
          />
        </form>
      ) : (
        <div className={`${styles.titleWrapper} ${textTypeStyle}`}>
          <p className={styles.text} onClick={handleCLick}>
            {text}
          </p>
        </div>
      )}
    </>
  );
};

interface LinkItemProps {
  link: LinkType;
  index: number;
}

const LinkItem: FC<LinkItemProps> = ({ link, index }) => {
  const [textIsEditing, setTextIsEditing] = useState(false);
  const [linkIsEditing, setLinkIsEditing] = useState(false);
  return (
    <Draggable draggableId={link.id} index={index} key={link.id}>
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={styles.handle}>
            <FaGripLines />
          </div>
          <div className={styles.textContainer}>
            <LinkText
              isEditing={textIsEditing}
              setIsEditing={setTextIsEditing}
              text={link.text}
              textType={TextType.title}
            />
            <LinkText
              isEditing={linkIsEditing}
              setIsEditing={setLinkIsEditing}
              text={link.text}
              textType={TextType.link}
            />
            {/* <p className={styles.text}>{link.text}</p>
            <p className={styles.text}>{link.id}</p> */}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default LinkItem;
