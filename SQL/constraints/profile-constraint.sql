-- Adds foreign key constraints to auth profile table

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS fk_private_profile_auth;
ALTER TABLE public.profiles ADD CONSTRAINT fk_private_profile_auth FOREIGN KEY (id) REFERENCES auth.users (id);

ALTER TABLE public.dogs DROP CONSTRAINT IF EXISTS fk_profiles_dogs_link;
ALTER TABLE public.dogs ADD CONSTRAINT fk_profiles_dogs_link FOREIGN KEY (id) REFERENCES public.profiles (id);