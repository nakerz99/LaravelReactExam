<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DateTimeLog;
class DateTimeLogController extends Controller
{
    public function index(){
        $date = DateTimeLog::all();
        return response()->json($date);
    }

    public function create(Request $request){

        $date = new DateTimeLog;
        $date->dateTimeLog = $request->timestamp;
        $date->log_type = $request->button;
        $date->save();
        return response()->json(array(
            'success' => true,
            'message' => 'created'
        ));
    }
}
