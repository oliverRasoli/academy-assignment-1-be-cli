
ALTER TABLE public.dogs DROP CONSTRAINT IF EXISTS fk_profiles_dogs_link;
ALTER TABLE public.dogs ADD CONSTRAINT fk_profiles_dogs_link FOREIGN KEY (uuid) REFERENCES public.profiles (id);