ALTER TABLE public.dogs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS read_dog_data on public.dogs;
CREATE POLICY read_dog_data
ON public.dogs
FOR SELECT USING (
  auth.uid() = uuid
);

DROP POLICY IF EXISTS insert_dog_data on public.dogs;
CREATE POLICY insert_dog_data
ON public.dogs
FOR INSERT 
TO authenticated
WITH CHECK (true);

