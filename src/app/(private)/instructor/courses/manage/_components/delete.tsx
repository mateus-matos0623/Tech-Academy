import { handleDeleteCourse } from "@/actions/course";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { LoaderCircle } from "lucide-react";

interface IDeleteCourseProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export default function DeleteCourse({
  id,
  isOpen,
  onClose,
}: IDeleteCourseProps) {

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await handleDeleteCourse(id);
    },
    onSuccess: (result) => {
      toast.success(result.message);
      onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  async function handleDelete(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(id);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Você tem certeza?</DialogTitle>
          <DialogDescription>
            Esta ação excluira permanentemente a estação do sistema.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDelete}>
          <div className="flex justify-end gap-4">
            <Button
              onClick={onClose}
              variant="outline"
              disabled={mutation.isPending}
            >
              Cancelar
            </Button>
            <Button variant="destructive" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Excluir"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}