"use client";

import { userPhoto } from "@/actions/photo";
import SvgUserIcon from "@/assets/svg/user-icon";
import Button from "@/components/Button";
import ErrorMessage from "@/helper/error-message";
import SuccessMessage from "@/helper/success-message";
import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image";
import { ChangeEvent, useState, useTransition } from "react";

interface ImageState {
  preview: string | null;
  file: File | null; // Defina o tipo como File | null
}

export const EditUserForm = () => {
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [selectedImage, setSelectedImage] = useState<ImageState>({
    preview: null,
    file: null, // Inicialize com null
  });

  // This function will be triggered when the file field change
  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage({
        preview: URL.createObjectURL(e.target.files[0]),
        file: e.currentTarget.files && e.currentTarget.files[0],
      });
    }
  };

  if (!user) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    startTransition(() => {
      const formData = new FormData();
      formData.append("image", selectedImage.file as File);
      formData.append("id", user.id as string);
      userPhoto(formData).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <div style={{ position: "relative" }}>
        {selectedImage.preview ? (
          <Image
            src={selectedImage.preview}
            alt="Selected"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "var(--border-radius-sm)",
            }}
          />
        ) : (
          <SvgUserIcon
            style={{ width: "100%", height: "auto", opacity: "0.4" }}
          />
        )}
        <input
          id="image"
          type="file"
          disabled={isPending}
          onChange={imageChange}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "1",
            opacity: "0",
            cursor: "pointer",
            fontSize: "0",
          }}
          required
        />
      </div>
      <ErrorMessage message={error} />
      <SuccessMessage message={success} />

      <Button type="submit" disabled={isPending}>
        Salvar
      </Button>
    </form>
  );
};
