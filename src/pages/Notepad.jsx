import styled from "styled-components";
import { useNotes } from "../features/notes/useNotes";
import { useUser } from "../features/authentication/useUser";
import { useDeleteNotes } from "../features/notes/useDeleteNotes";
import { useCreateNotes } from "../features/notes/useCreateNotes";
import { useEditNotes } from "../features/notes/useEditNotes";
import { useState, useRef } from "react";
import ConfirmDelete from "../ui/ConfirmDelete";
import { HiXMark } from "react-icons/hi2";
import Modal from "../ui/Modal";
import ConfirmName from "../ui/ConfirmName";

const NotesContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
`;

const NotesList = styled.div`
  height: 100%;
  width: 25%;
  overflow-y: auto;
  background-color: var(--color-grey-0);
`;

const Notes = styled.div`
  background-color: var(--color-grey-0);
  height: 100%;
  width: 75%;
  padding: 20px;
`;

const NoteHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-200);
  position: relative;

  button {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    top: 0%;
    right: 0%;
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: var(--color-grey-0);
    border: none;
    cursor: pointer;
  }

  &:hover {
    background-color: var(--color-grey-200);

    button {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NoteContent = styled.textarea`
  z-index: 1;
  position: relative;
  width: 100%;
  height: calc(100% - 40px);
  padding: 10px;
  font-size: 16px;
  background-color: var(--color-grey-100);
`;

const CreateNoteButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--color-grey-200);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-300);
  }
`;

const NoNotesMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: var(--color-grey-500);
`;

function Notepad() {
  const { isLoading, error, notes } = useNotes();
  const { user, isLoading: isLoaded } = useUser();
  const { isDeleting, deleteNote } = useDeleteNotes();
  const { createNote } = useCreateNotes();
  const { isEditing, editNotes } = useEditNotes();

  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [noteContent, setNoteContent] = useState("");
  const [initialContent, setInitialContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNoteHeader, setNewNoteHeader] = useState("");
  const noteContentRef = useRef(null);

  if (isLoading || isLoaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading notes: {error.message}</div>;
  }

  const userNotes = notes.filter((note) => note.mail === user.email);

  const handleNoteClick = (note) => {
    setSelectedNoteId(note.id);
    setNoteContent(note.note);
    setInitialContent(note.note);
  };

  const handleConfirmNoteCreation = async () => {
    if (newNoteHeader.trim()) {
      const newNote = {
        id: Math.floor(Math.random() * 1000000),
        header: newNoteHeader,
        mail: user.email,
        note: "",
      };

      try {
        await createNote(newNote);
        setSelectedNoteId(newNote.id);
        setNoteContent(newNote.note);
        setInitialContent(newNote.note);
        setNewNoteHeader("");

        setTimeout(() => {
          if (noteContentRef.current) {
            noteContentRef.current.focus();
          }
        }, 0);
      } catch (error) {
        console.error("Error creating note:", error);
        alert("Notes could not be created.");
      }

      setIsModalOpen(false);
    } else {
      alert("Note header cannot be empty.");
    }
  };

  const handleSaveNote = () => {
    if (selectedNoteId !== null && noteContent !== undefined) {
      if (noteContent.trim() !== initialContent.trim()) {
        if (noteContent.trim() !== "") {
          editNotes({
            newNotesData: { note: noteContent.trim() },
            id: selectedNoteId,
          }).catch((error) => {
            console.error("Error saving note:", error);
            alert("Note could not be saved.");
          });
        } else {
          if (window.confirm("The note is empty. Do you want to delete it?")) {
            deleteNote(selectedNoteId)
              .then(() => {
                setSelectedNoteId(null);
                setNoteContent("");
                setInitialContent("");
              })
              .catch((error) => {
                console.error("Error deleting note:", error);
                alert("Note could not be deleted.");
              });
          }
        }
      }
    }
  };

  return (
    <>
      <NotesContainer>
        <NotesList>
          {userNotes.map((note) => (
            <NoteHeader key={note.id} onClick={() => handleNoteClick(note)}>
              <p> {note.header}</p>
              <Modal>
                <Modal.Open opens="delete">
                  <button>
                    <HiXMark />
                  </button>
                </Modal.Open>
                <Modal.Window name="delete">
                  <ConfirmDelete
                    resourceName="note"
                    disabled={isDeleting}
                    onConfirm={() =>
                      deleteNote(note.id).then(() => {
                        if (selectedNoteId === note.id) {
                          setSelectedNoteId(null);
                          setNoteContent("");
                          setInitialContent("");
                        }
                      })
                    }
                  />
                </Modal.Window>
              </Modal>
            </NoteHeader>
          ))}

          <Modal>
            <Modal.Open opens="createNote">
              <CreateNoteButton>Create New Note</CreateNoteButton>
            </Modal.Open>
            <Modal.Window name="createNote">
              <ConfirmName
                name={newNoteHeader}
                onChange={(header) => setNewNoteHeader(header)}
                onConfirm={handleConfirmNoteCreation}
                onCloseModal={() => setIsModalOpen(false)}
                disabled={false}
              />
            </Modal.Window>
          </Modal>
        </NotesList>
        <Notes>
          {userNotes.length === 0 ? (
            <NoNotesMessage>
              Select a note to view or create a new one
            </NoNotesMessage>
          ) : selectedNoteId ? (
            <NoteContent
              ref={noteContentRef}
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              onBlur={handleSaveNote}
            />
          ) : (
            <div>Select a note to view or create a new one</div>
          )}
        </Notes>
      </NotesContainer>
    </>
  );
}

export default Notepad;
