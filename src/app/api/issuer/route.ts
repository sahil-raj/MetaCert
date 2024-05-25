import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

interface InstitutionData {
  institutionId: string;
  institutionname: string;
  addressclg: string;
  district: string;
  address: string;
}

let institutionData: InstitutionData | null = null;

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { institutionId, institutionname, addressclg, district, address } = req.body;

      institutionData = {
        institutionId, 
        institutionname,
        addressclg,
        district,
        address,
      };

      NextResponse.json({ message: 'Institution data stored successfully' }, {status: 200});
    } catch (error) {
      console.error('Error storing institution data:', error);
      NextResponse.json({ message: 'Internal Server Error' }, {status: 500});
    }
  } export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (!institutionData) {
        NextResponse.json({message: 'No data'}, {status: 200});
        return;
      }

      NextResponse.json(institutionData);
    } catch (error) {
      console.error('Error fetching institution data:', error);
      NextResponse.json({ message: 'Internal Server Error' });
    }
  } 
