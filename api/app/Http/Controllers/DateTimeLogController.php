<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DateTimeLog;
use App\Http\Requests\DateTimeLogRequest;
class DateTimeLogController extends Controller
{
    public function index(){
        $date = DateTimeLog::all();
        return response()->json($date);
    }

    public function create(DateTimeLogRequest $request){

        $date = new DateTimeLog;
        $date->dateTimeLog = $request->timestamp;
        $date->log_type = $request->log_type;
        $date->save();
        return response()->json(array(
            'success' => true,
            'message' => 'created',
            'data' => $date
        ));
    }

    public function delete($id){
        $result = DateTimeLog::find( $id );
        $result->delete();

        return response()->json(array(
            'success' => true,
            'message' => 'deleted'
        ));
    }
}
