import React from "react";
import InputNote from "../components/InputNote";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import { ToastContainer, toast } from "react-toastify";

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    toast("Catatan Berhasil Ditambahkan !");
    addNote(note);
    navigate("/");
  }

  return <InputNote addNote={onAddNoteHandler} />;
}

export default AddPage;
