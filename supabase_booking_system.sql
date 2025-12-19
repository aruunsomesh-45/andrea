-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT DEFAULT 'confirmed', -- confirmed, cancelled
  UNIQUE(start_time) -- Prevent simple exact double booking at database level
);

-- Enable RLS
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Policy: Public can insert (book)
CREATE POLICY "Public can book appointments" ON appointments
  FOR INSERT WITH CHECK (true);

-- Policy: Public can view their own appointments (strict logic might require auth, but for now open for valid time slots check)
-- Actually, for "getAvailableSlots", we need to query ALL appointments for a day to calculate free slots.
-- So we need a policy that allows reading start_time and end_time for everyone (to calculate availability).
CREATE POLICY "Public can view busy times" ON appointments
  FOR SELECT USING (true);

-- Create availability settings table (admin can edit this primarily, public reads)
CREATE TABLE IF NOT EXISTS availability_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  day_of_week INT NOT NULL, -- 0=Sunday, 1=Monday...
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_active BOOLEAN DEFAULT true,
  UNIQUE(day_of_week)
);

-- Seed default availability (Mon-Fri, 9am-5pm)
INSERT INTO availability_settings (day_of_week, start_time, end_time) VALUES
(1, '09:00', '17:00'),
(2, '09:00', '17:00'),
(3, '09:00', '17:00'),
(4, '09:00', '17:00'),
(5, '09:00', '17:00')
ON CONFLICT (day_of_week) DO NOTHING;

ALTER TABLE availability_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view availability" ON availability_settings
  FOR SELECT USING (true);
