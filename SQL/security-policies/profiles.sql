ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS read_user_data on public.profiles;
CREATE POLICY read_user_data
ON public.profiles
FOR SELECT USING (
  auth.uid() = id
);

DROP POLICY IF EXISTS insert_for_auth_users on public.profiles;
CREATE POLICY insert_for_auth_users
ON public.profiles
FOR INSERT 
TO authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS update_access_based_on_id on public.profiles;
CREATE POLICY update_access_based_on_id ON public.profiles
AS PERMISSIVE FOR UPDATE
TO authenticated
USING ((auth.uid() = id))
WITH CHECK ((auth.uid() = id))