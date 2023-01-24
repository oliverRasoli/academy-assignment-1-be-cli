ALTER TABLE public.dogs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS read_dog_data on public.dogs;
CREATE POLICY read_dog_data
ON public.dogs
FOR SELECT USING (
  auth.uid() = uuid
);

